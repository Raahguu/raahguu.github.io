fetch("/root/html/footer.html")
.then((response) => response.text())
.then((data) => { 
    let old_element = document.getElementById("replace-with-footer"); 
    let new_element = new DOMParser().parseFromString(data, "text/html").querySelector("footer"); 
    old_element.parentNode.replaceChild(new_element, old_element); 
})
.catch((err) => console.log(err));