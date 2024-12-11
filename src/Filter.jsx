
import Form from 'react-bootstrap/Form';
import MovieCard from './MovieCard';
import ReactStars from 'react-stars'
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

export default function Filter({ movie }) {

    const [item, setItem] = useState(movie)

    const [val, setVal] = useState({ title: "", rating: "" })

    const updateVal = (evt) => {
        setVal(oldVal => {
            console.log(oldVal)
            return { ...oldVal, [evt.target.name]: evt.target.value }
        })

    }

    const ratingChanged = (newRating) => {
        setVal(oldVal => {
            console.log(oldVal)
            return { ...oldVal, rating: newRating }
        })
    }



    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "30px", }}>
                <div>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        <Form.Control onChange={updateVal}
                            value={val.title}
                            name='title'
                            placeholder="Title"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                <ReactStars
                    count={5}
                    value={val.rating}
                    onChange={ratingChanged}
                    size={24}
                    color2={'#ffd700'} />



            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }} >
                {item.filter(e => e.title.includes(val.title) && e.rating.toString().includes(val.rating)).map(e => <MovieCard {...e} key={e.id} />)

                }
            </div>
        </>
    )
}



