interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-900">
      {icon && (
        <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
