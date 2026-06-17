import { FormHTMLAttributes } from "react";
import { UseFormHandleSubmit, FieldValues } from "react-hook-form";

interface FormWrapperProps<T extends FieldValues> 
    extends Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    onSubmit: (data: T) => void | Promise<void>;
    handleSubmit: UseFormHandleSubmit<T>;
    isSubmitting?: boolean;
    children: React.ReactNode;
}

export function FormWrapper<T extends FieldValues>({
    handleSubmit,
    onSubmit,
    isSubmitting,
    children,
    className,
    ...props
}: FormWrapperProps<T>) {
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={`space-y-5 ${className || ""}`}
            noValidate
            {...props}
        >
            {children}
        </form>
    );
}

interface FormFieldProps {
    label?: string;
    error?: string;
    children: React.ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label className="text-sm font-medium">
                    {label}
                </label>
            )}
            {children}
            {error && (
                <p className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
