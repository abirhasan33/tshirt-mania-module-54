import { useEffect, useState } from "react"

const useTshirts = () => {
    const [tShirt, setTShirt] = useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(rse => rse.json())
        .then(data => setTShirt(data))
    },[]);
    return [tShirt, setTShirt];
}

export default useTshirts;