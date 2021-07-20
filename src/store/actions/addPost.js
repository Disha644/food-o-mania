import { firestore, storage } from '../../firebase';

export const savePost = (userId, title, image, content) => {
    return dispatch => {

        const uploadTask = storage.ref('images/' + image.name).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { }, (error) => {
                alert('Image upload failed');
            }, () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        firestore.collection('posts').add({
                            userId: userId,
                            title: title,
                            imageURL: url,
                            content: content
                        }).then(() => {
                            console.log('success');
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            });
    }
}