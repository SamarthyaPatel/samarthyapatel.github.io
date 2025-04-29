const handleMouseMove = (e) => {
    const customCursor = document.querySelector(".cursor");
    customCursor.style.left = (e.clientX - 16) + 'px';
    customCursor.style.top = (e.clientY - 16) + 'px';
};

document.addEventListener("mousemove", handleMouseMove);

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});