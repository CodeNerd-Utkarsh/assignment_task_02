
import "./UserCard.css"
function UserCard({ apidata }) {


    return (
        <div className="cards">

            {
                apidata.length > 0 ? (
                    apidata.map((data) => (
                        <div className="userCard" key={data.id}>

                            <img className="avataar" src={data.avatar} alt={`user id ${data.id}`} />
                            <p className="userName">{data.first_name} {data.last_name}</p>
                            <p className="userEmail">{data.email}</p>
                        </div>
                    ))
                ) : (null)
            }
        </div>
    )
}

export default UserCard