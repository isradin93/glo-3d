const changeImage = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');

    commandPhoto.forEach(photo => {
        photo.addEventListener('mouseover', event => {
            [event.target.src, event.target.dataset.img] = [event.target.dataset.img, event.target.src];
        });
    });

    commandPhoto.forEach(photo => {
        photo.addEventListener('mouseout', event => {
            [event.target.dataset.img, event.target.src] = [event.target.src, event.target.dataset.img];
        });
    });
};

export default changeImage;