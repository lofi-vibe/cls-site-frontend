import Link from 'next/link'
import baseStyles, { variantStyles } from "../styles/styles";



export function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  ...props
}) {
  className = `${baseStyles[variant]} ${variantStyles[variant][color]} ${className}`

  return href ? (
    <Link href={href} className={className.trim()} {...props} />
  ) : (
    <button className={className.trim()} {...props} />
  )
}
