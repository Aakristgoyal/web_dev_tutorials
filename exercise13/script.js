function createcard(title,cName,views,monthsold,duration,thumbnail){
    let viewsstr;
    if(views<1000000 && views>1000){
        viewsstr=views/1000+"k";
    }
    else if(views>=1000000){
        viewsstr=views/1000000+"M";
    }
    else{
        viewsstr=views;
    }
    let html=`<div class="card">
            <div class="image"><img
                    src="${thumbnail}"
                    alt=""><div class="duration1">${duration}</div></div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewsstr} views . ${monthsold} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html;
}
createcard("Welcome to the Sigma Web Development Course - Web Development Tutorials in Hindi playlist! ","codewithharry",200000,5,"32:34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createcard("Welcome to the Sigma Web Development Course - Web Development Tutorials in Hindi playlist! ","codewithharry",200000,5,"32:34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createcard("Welcome to the Sigma Web Development Course - Web Development Tutorials in Hindi playlist! ","codewithharry",200000,5,"32:34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createcard("Welcome to the Sigma Web Development Course - Web Development Tutorials in Hindi playlist! ","codewithharry",20,5,"32:34","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")