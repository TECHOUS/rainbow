let searchArray = [];
let results = [];

init();                                                         // this function initializes all the values
let find = document.getElementById('header-buttons-search');
let searchResults = document.getElementById('searchResults');
find.addEventListener("keyup",(event)=>{
    if(find.value.length > 0){
        showSearchResults();
        removeSearchResults();
        search(find.value);
    }else{
        hideSearchResults();
    }
})

const showSearchResults = ()=>{
    searchResults.style.display = "block";
}

const hideSearchResults = ()=>{
    searchResults.style.display = "none";
}

const search = (searchString)=>{
    let index = searchString.length;
    results = [];
    for(let i=0;i<searchArray.length;i++){
        if(searchArray[i].toUpperCase().includes(searchString.toUpperCase())){
            results.push(searchArray[i]);
        }
    }
    render(results);
}

const render = (results)=>{
    // root - searchResults
    for(let i=0;i<results.length;i++){
        let div = document.createElement("div");
        div.setAttribute("class","searchResultsDiv");
        div.addEventListener('click',()=>{
            hideSearchResults();
            clearSearchField();
        });

        let a = document.createElement("a");
        let link = createPageLink(results[i]);
        a.setAttribute("href", link);
        a.setAttribute("class","searchResults-a");

        let text = document.createTextNode(results[i]);
        a.appendChild(text);
        
        div.appendChild(a);
        searchResults.appendChild(div);
    }
}

// this function will remove all the nodes from search results
const removeSearchResults = ()=>{
    let child = searchResults.lastElementChild;
    while(child){
        searchResults.removeChild(child);
        child = searchResults.lastElementChild;
    }
}

// this function creates the valid page link
const createPageLink = (result)=>{
    let link = "#";
        result = result.split(" ").join("-");
        link = link+result.toLowerCase()+"-hr";
    
    return link;
}

// this function clears the data of search field
const clearSearchField = ()=>{
    find.value = "";
}