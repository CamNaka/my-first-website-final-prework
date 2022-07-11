window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log("you are at end of page.")
    }
}