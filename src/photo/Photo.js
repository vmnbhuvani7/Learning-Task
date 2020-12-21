import React, { useState } from 'react'

function Photo() {
    const [state, setstate] = useState({
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    })

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                console.log(reader.result);
                setstate({
                    profileImg: reader.result
                })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    return (
        <div>
            <div class="container">
                <h1>File upload</h1>
                <img src={state.profileImg} class="rounded-circle" alt="Avatar" width="200" height="200" />
                <br />
                <input type="file" name="img" onChange={(e) => { imageHandler(e) }} />
            </div>
        </div>
    )
}

export default Photo