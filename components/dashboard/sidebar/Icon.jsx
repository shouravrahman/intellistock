import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const Icon = ({ icon, className, href }) => (
	<Link href={href} className={clsx("rounded", "cursor-pointer", className)}>
		{icon}
	</Link>
);

export default Icon;

export const AlternateIcons = ({ src, alt, width, height }) => {
	return (
		<Image
			className=''
			layout='fixed'
			objectFit='cover'
			objectPosition='center'
			width={width}
			height={height}
			src={src}
			alt={alt}
		/>
	);
};
