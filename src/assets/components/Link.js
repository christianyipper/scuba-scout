const Link = ( {path, text, attr} ) => {
    return (
        <a href={path} className={`hover:text-sky-500 dark:hover:text-orange-400 transition-all duration-200 ease-in-out link ${attr}`}>{text}</a>
    );
}

export default Link;