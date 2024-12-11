import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'

export default function MovieCard({ id, title, description, posterURL, rating, deleteMovie }) {
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <div onClick={() => deleteMovie(id)} >
            <Card style={{
                width: '15rem',
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '10px',
                backgroundColor: '#f9f9f9',
            }}>
                <Card.Img
                    variant="top"
                    src={posterURL}
                    style={{
                        borderRadius: '10px',

                        height: '300px',
                    }}
                />
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'center' }}>
                        {title}
                    </Card.Title>
                    <Card.Text style={{ color: '#555', textAlign: 'justify', margin: '10px 0' }}>
                        {description}
                    </Card.Text>
                    <Card.Title
                        style={{
                            fontSize: '1.5rem',
                            color: 'black',
                            textAlign: 'center',
                            display:'flex',
                            justifyContent:'center'
                        }}
                    >
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            value={rating}
                            size={24}
                            edit={false}
                            color2={'#ffd700'} />
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}