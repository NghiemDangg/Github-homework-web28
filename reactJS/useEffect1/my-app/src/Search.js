import React,{ useState, useEffect} from "react";
export default function SearchBar(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts);
        });
    }, [posts]);

    const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        const handleChage = (e)=>{
            e.prevenDefault();
            setSearchInput(e.target.value);
        };

        if(searchInput.length>0){
            posts.filter((post) =>{
                return post.title.match(searchInput);
            })
        }

        // document.getElementById("#search-box").addEventListener("onchange",handleChage())
    },[])

    return(
        <div>
            <input 
            id="search-box"
            value={searchInput}
            />
        </div>
        )
}