import { useState } from "react";
import BookCard from "./BookCard";


const AllBooks = () => {
    const [books,setBooks]=useState([])
    useState(()=>{
     fetch('https://library-management-server-orcin.vercel.app/books')
     .then(res=>res.json())
     .then(data=>setBooks(data))
    },[]);
    console.log(books)
    return (
        <div className="pt-24">
            <h3 className="text-2xl font-semibold text-center mb-8">See all the books here:{books.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    books.map(info=><BookCard info={info} key={info._id}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;