import { useState } from 'react';
import users from './user_data.json';
import SearchBarModule from 'react-js-search';
const SearchBar = SearchBarModule.default || SearchBarModule;

export default function UserList() {
    const [filteredUsers, setFilteredUsers] = useState(users);

    const onSearchClick = (searchText) => {
        const filteredItems = users.filter(user => user.name.toLowerCase().includes(searchText))
        setFilteredUsers(filteredItems);
    };

    return <>
        <h3 className="text-center">User List</h3>
        <div className="row">
            <div className="col-sm-6 offset-3">
                <SearchBar
                    // onSearchTextChange={onSearchTextChange}
                    onSearchButtonClick={onSearchClick}
                    placeHolderText={"Search here..."}
                    data={users}
                />
            </div>
        </div>
        <div className="row mt-3">
            {filteredUsers.map((user) => {
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
