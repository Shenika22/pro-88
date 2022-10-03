async addPost() {
    if(
        this.StaticRange.caption
    ){
        let postData = {
            preview_image: this.state.previewImage,
            caption: this.state.caption,
            author: firebase.auth().currentUser.uid,
            created_on: new Data()
            author_uid: firebase.auth().currentUser.uid,
            profile_image: this.state.profile_image,
            likes: 0
    };
    await firebase
        .database()
        .ref(
            "/posts/" +
            Math.random()
                .toString(36)
                .slice(2)
        )
        .set(postData)
        .then(function (snapshot) { });
        this.props.setUpdateToTrue
        this.props.navigation.navigate("Feed")
} else {
    alert.alert(
        "Error",
        "All fields are required!"
        [{ text: "OK", onPress: () => console.log("OK Pressed")}],
        {cancedable: false}
    );
}

}

constructor(props) {
    super(props);
    this.state = {
        light_theme: true,
        post_id: this.props.post.key,
        post_data: this.props.post.valuse
    };
}