import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header/Header';

import styles from './Admin.module.css';

function Admin() {
  const navigate = useNavigate();

  // states related with fetching states
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  // states related with categories and cities
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  // form with react-hook-form built in hooks
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: '',
      category: '',
      address: '',
      city: '',
      descriptionTitle: '',
      descriptionContent: '',
      ac: false,
      ilimitedKm: false,
      automatic: false,
      size: '',
      passengers: '',
      doors: '',
      largeBagsCapacity: '',
      smallBagsCapacity: '',
      policyTank: '',
      policyInsurance: '',
      policyCancellation: '',
      images: [
        {
          url: '',
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
    rules: {
      minLength: {
        value: 6,
        message: 'Por favor agregue al menos 6 enlaces de imágenes',
      },
    },
  });

  // fetch categories and cities from api to fill the respective options on mount
  // Promise.all waits until all jobs are resolved
  useEffect(() => {
    try {
      fetch(
        'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/categories'
      )
        .then((response) => response.json())
        .then((data) => setCategories(data));

      fetch(
        'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/cities'
      )
        .then((response) => response.json())
        .then((data) => setCities(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onSubmit = async (data) => {
    console.log('form submitted', data);
    const transformedData = mapFormValuesForProductCreation(data);
    console.log('transformedData', transformedData);

    try {
      setError(null);
      setLoading(true);
      const productResponse = await fetch(
        'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/car/add',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(transformedData),
        }
      );

      if (!productResponse.ok) {
        console.log('could not create');
        throw productResponse;
      }

      if (productResponse.ok) {
        const json = await productResponse.json();
        console.log('product created', json);

        // add images here
        const requests = data.images.map((image) =>
          fetch(
            'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/images/add',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                title: data.title,
                url: image.url,
                car: { id: json },
              }),
            }
          )
        );
        Promise.all(requests).then((responses) => {
          for (let response of responses) {
            console.log(`${response.status}`);
            if (!response.ok) {
              console.log('could not add image');
              throw response;
            }
          }
          return responses;
        });

        setLoading(false);
        setError(null);
        navigate('/product/creation-success');
      }
    } catch (err) {
      setLoading(false);
      setError(
        'Lamentablemente el producto no ha podido crearse. Por favor intente más tarde.'
      );
      console.log(err);
    }
  };

  const mapFormValuesForProductCreation = (formData) => {
    const {
      ac,
      address,
      automatic,
      category,
      city,
      descriptionContent,
      descriptionTitle,
      doors,
      ilimitedKm,
      largeBagsCapacity,
      passengers,
      policyCancellation,
      policyInsurance,
      policyTank,
      size,
      smallBagsCapacity,
      title,
    } = formData;

    const data = {
      address,
      category: {
        id: parseInt(category),
      },
      characteristic: {
        ac,
        automatic,
        doors: parseInt(doors),
        largeBagsCapacity: parseInt(largeBagsCapacity),
        ilimitedKm,
        passengers: parseInt(passengers),
        size,
        smallBagsCapacity: parseInt(smallBagsCapacity),
      },
      city: {
        id: parseInt(city),
      },
      descriptionContent,
      descriptionTitle,
      policies: [
        { title: 'Política de tanque', description: policyTank },
        {
          title: 'Seguridad y cobertura de seguro',
          description: policyInsurance,
        },
        { title: 'Política de cancelación', description: policyCancellation },
      ],
      title,
    };

    return data;
  };

  // show loading message if categories and cities isn't fetched yet
  if (categories.length === 0 || cities.length === 0) {
    return <p>Cargando...</p>;
  }

  // show loading if submitting form
  if (loading)
    return (
      <p className={`${styles.flexRow} ${styles.center}`}>
        Estamos creando el producto!
      </p>
    );

  return (
    <section className={styles.container}>
      <Header title="Administración de productos" />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {error && <p className={styles.error}>{error}</p>}
        <h2>Crear auto</h2>
        {/* BASIC INFO SECTION */}
        <section className={styles.formBasicInfo}>
          <article className={styles.flexColumn}>
            <label htmlFor="title">Nombre del auto</label>
            {errors.title && (
              <p className={styles.error}>{errors.title.message}</p>
            )}
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Nombre del producto..."
              {...register('title', {
                required: {
                  value: true,
                  message: 'Por favor ingrese un nombre',
                },
              })}
            />
          </article>
          <article className={styles.flexColumn}>
            <label htmlFor="category">Categoría</label>
            {errors.category && (
              <p className={styles.error}>{errors.category.message}</p>
            )}
            <select
              id="category"
              name="category"
              {...register('category', {
                required: {
                  value: true,
                  message: 'Por favor seleccione una opción',
                },
              })}
            >
              <option value="">-- Seleccione opción --</option>
              {categories.length > 0 &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.title}
                  </option>
                ))}
            </select>
          </article>
          <article className={styles.flexColumn}>
            <label htmlFor="address">Dirección</label>
            {errors.address && (
              <p className={styles.error}>{errors.address.message}</p>
            )}
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Dirección del alquiler de auto..."
              {...register('address', {
                required: {
                  value: true,
                  message: 'Por favor ingrese una dirección',
                },
              })}
            />
          </article>
          <article className={styles.flexColumn}>
            <label htmlFor="city">Ciudad</label>
            {errors.city && (
              <p className={styles.error}>{errors.city.message}</p>
            )}
            <select
              id="city"
              name="city"
              {...register('city', {
                required: {
                  value: true,
                  message: 'Por favor seleccione una opción',
                },
              })}
            >
              <option value="">-- Seleccione opción --</option>
              {cities.length > 0 &&
                cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
          </article>
          <article
            className={`${styles.descriptionTitle} ${styles.flexColumn}`}
          >
            <label htmlFor="descriptionTitle">Título descripción</label>
            {errors.descriptionTitle && (
              <p className={styles.error}>{errors.descriptionTitle.message}</p>
            )}
            <input
              type="text"
              name="descriptionTitle"
              id="descriptionTitle"
              placeholder="Título descripción..."
              {...register('descriptionTitle', {
                required: {
                  value: true,
                  message: 'Por favor ingrese un título descripción',
                },
              })}
            />
          </article>
          <article
            className={`${styles.descriptionContent} ${styles.flexColumn}`}
          >
            <label htmlFor="descriptionContent">Descripción</label>
            {errors.descriptionContent && (
              <p className={styles.error}>
                {errors.descriptionContent.message}
              </p>
            )}
            <textarea
              id="descriptionContent"
              name="descriptionContent"
              placeholder="Escriba aquí"
              {...register('descriptionContent', {
                required: {
                  value: true,
                  message: 'Por favor ingrese una descripción',
                },
              })}
            />
          </article>
        </section>

        {/* ATTRIBUTES SECTION */}
        <section className={styles.formAttributes}>
          <h3>Agregar atributos</h3>
          <div className={styles.background}>
            <article className={styles.flexRow}>
              <input type="checkbox" id="ac" name="ac" {...register('ac')} />
              <label htmlFor="ac">Aire acondicionado</label>
            </article>
            <article className={styles.flexRow}>
              <input
                type="checkbox"
                id="ilimitedKm"
                name="ilimitedKm"
                {...register('ilimitedKm')}
              />
              <label htmlFor="ilimitedKm">Kilómetros ilimitados</label>
            </article>
            <article className={styles.flexRow}>
              <input
                type="checkbox"
                id="automatic"
                name="automatic"
                {...register('automatic')}
              />
              <label htmlFor="automatic">Automático</label>
            </article>
            <article className={styles.flexColumn}>
              {errors.size && (
                <p className={styles.error}>{errors.size.message}</p>
              )}
              <label htmlFor="size">Tamaño</label>
              <select
                id="size"
                name="size"
                {...register('size', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese un tamaño',
                  },
                })}
              >
                <option value="">-- Seleccione opción --</option>
                <option value="grande">Grande</option>
                <option value="mediano">Mediano</option>
                <option value="chico">Chico</option>
              </select>
            </article>
            <article className={styles.flexColumn}>
              {errors.passengers && (
                <p className={styles.error}>{errors.passengers.message}</p>
              )}
              <label htmlFor="passengers">Pasajeros</label>
              <select
                id="passengers"
                name="passengers"
                {...register('passengers', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese cantidad de pasajeros',
                  },
                })}
              >
                <option value="">-- Seleccione opción --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </article>
            <article className={styles.flexColumn}>
              {errors.doors && (
                <p className={styles.error}>{errors.doors.message}</p>
              )}
              <label htmlFor="doors">Puertas</label>
              <select
                id="doors"
                name="doors"
                {...register('doors', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese cantidad de puertas',
                  },
                })}
              >
                <option value="">-- Seleccione opción --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </article>
            <article className={styles.flexColumn}>
              {errors.largeBagsCapacity && (
                <p className={styles.error}>
                  {errors.largeBagsCapacity.message}
                </p>
              )}
              <label htmlFor="largeBagsCapacity">Equipaje grande</label>
              <select
                id="largeBagsCapacity"
                name="largeBagsCapacity"
                {...register('largeBagsCapacity', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese cantidad de equipaje grande',
                  },
                })}
              >
                <option value="">-- Seleccione opción --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </article>
            <article className={styles.flexColumn}>
              {errors.smallBagsCapacity && (
                <p className={styles.error}>
                  {errors.smallBagsCapacity.message}
                </p>
              )}
              <label htmlFor="smallBagsCapacity">Equipaje pequeño</label>
              <select
                id="smallBagsCapacity"
                name="smallBagsCapacity"
                {...register('smallBagsCapacity', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese cantidad de equipaje pequeño',
                  },
                })}
              >
                <option value="">-- Seleccione opción --</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
              </select>
            </article>
          </div>
        </section>

        {/* POLICIES SECTION */}
        <section className={styles.formPolicies}>
          <h3>Políticas del producto</h3>
          <div className={styles.policyContent}>
            <article className={styles.flexColumn}>
              <label htmlFor="policyTank">
                <p>Política de tanque</p>
              </label>
              <p className="small-text">Descripción</p>
              {errors.policyTank && (
                <p className={styles.error}>{errors.policyTank.message}</p>
              )}
              <textarea
                placeholder="Escriba aquí"
                id="policyTank"
                name="policyTank"
                {...register('policyTank', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese descripción',
                  },
                })}
              />
            </article>
            <article className={styles.flexColumn}>
              <label htmlFor="policyInsurance">
                <p>Seguridad y cobertura de seguro</p>
              </label>
              <p className="small-text">Descripción</p>
              {errors.policyInsurance && (
                <p className={styles.error}>{errors.policyInsurance.message}</p>
              )}
              <textarea
                placeholder="Escriba aquí"
                id="policyInsurance"
                name="policyInsurance"
                {...register('policyInsurance', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese descripción',
                  },
                })}
              />
            </article>
            <article className={styles.flexColumn}>
              <label htmlFor="policyCancellation">
                <p>Política de cancelación</p>
              </label>
              <p className="small-text">Descripción</p>
              {errors.policyCancellation && (
                <p className={styles.error}>
                  {errors.policyCancellation.message}
                </p>
              )}
              <textarea
                placeholder="Escriba aquí"
                id="policyCancellation"
                name="policyCancellation"
                {...register('policyCancellation', {
                  required: {
                    value: true,
                    message: 'Por favor ingrese descripción',
                  },
                })}
              />
            </article>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section className={styles.formImages}>
          <h3>Cargar imágenes</h3>
          <div className={styles.formImagesError}>
            {errors?.images?.root && (
              <p className={styles.error}>{errors?.images?.root?.message}</p>
            )}
          </div>
          <div className={styles.background}>
            {fields.map((field, index) => (
              <article key={field.id} className={styles.flexColumn}>
                {errors.images?.[index]?.url && (
                  <p className={styles.error}>
                    {errors.images?.[index]?.url?.message}
                  </p>
                )}
                <div className={styles.urlInputContainer}>
                  <input
                    type="text"
                    placeholder="Insertar https://"
                    {...register(`images.${index}.url`, {
                      required: { value: true, message: 'Ingrese una URL' },
                    })}
                  />
                  {fields.length > 1 && (
                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => remove(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  )}
                </div>
              </article>
            ))}
            <button type="button" onClick={() => append({ url: '' })}>
              +
            </button>
          </div>
        </section>

        <button type="submit">Crear</button>
      </form>
    </section>
  );
}

export default Admin;
