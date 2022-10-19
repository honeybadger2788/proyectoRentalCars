export const Typography = ({ variant, children, ...props }) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 class="text-2xl font-bold" {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 class="text-xl font-bold" {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 class="font-bold" {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 class="text-sm font-bold" {...props}>
          {children}
        </h4>
      );
    case 'button1':
      return (
        <span class="text-sm font-bold" {...props}>
          {children}
        </span>
      );
    case 'button2':
      return (
        <span class="font-bold" {...props}>
          {children}
        </span>
      );
    case 'body1':
      return (
        <p class="text-sm font-medium" {...props}>
          {children}
        </p>
      );
    case 'body2':
      return (
        <p class="text-xs font-medium" {...props}>
          {children}
        </p>
      );
    default:
      return <p>{children}</p>;
  }
};
