async function oneThing() {
    for (let i = 1; i < 101; i++) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + i);
        const rep = await response.json();
        let newTag = document.createElement("div");
        newTag.setAttribute("class", "post");
        const usrResponse = await fetch('https://jsonplaceholder.typicode.com/users/' + JSON.parse(rep.userId));
        const user = await usrResponse.json(); 
        let postUsr = document.createElement("p");
        postUsr.setAttribute("class", "user");
        postUsr.innerHTML = user.name + " says:";
        newTag.append(postUsr);
        let titleText = document.createElement("h3");
        titleText.setAttribute("class", "title");
        titleText.innerHTML = rep.title;
        newTag.append(titleText);
        let postText = document.createElement("p");
        postText.setAttribute("class", "text");
        postText.innerHTML = rep.body;
        newTag.append(postText);
        document.body.append(newTag);
    }
}

oneThing()
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
})