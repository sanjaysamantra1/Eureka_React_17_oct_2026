import userArr from './user_data.json';

export default function UserList() {
    return <>
        <h3 className="text-center">User List</h3>
        <div className="row">
            {userArr.map((user) => {
                return <div className="col-sm-3" key={user.id}>
                    <div className="card">
                        <img src="https://e7.pngegg.com/pngimages/428/137/png-clipart-male-avatar-young-user-icon-icons-logos-emojis-users.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{user.username}</h5>
                            <p className="card-text">{user.name}</p>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.phone}</p>
                            <p className="card-text">{user.address.city}</p>
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
