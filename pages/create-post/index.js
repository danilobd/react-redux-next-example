import React, { useRef, useState, useEffect } from 'react';

export default function CreatePost() {

    const title = useRef();
    const text = useRef();
    const button = useRef();

    const [isSended, setSended] = useState("no");

    const Button = () => {

        if (isSended === "yes") {

            return (
                <button
                    className="button buttomSendOk"
                    type="button"
                    ref={button}>
                    Posted
                </button>
            );

        }
        else if (isSended === "no") {

            return (
                <button
                    className="button"
                    type="button"
                    ref={button}
                    onClick={sendPost}>
                    Post
                </button>
            );

        } else {

            return (
                <button
                    className="button"
                    type="button"
                    ref={button}
                    onClick={sendPost}>
                    ...
                </button>
            );

        }

    };

    const textChange = () => {

        setSended("no");

        if (title.current.value === "" || text.current.value === "") {
            button.current.classList.remove("buttomReady");
        }
        else {
            button.current.classList.add("buttomReady");
        }

    };

    const sendPost = () => {

        setSended("sending");

        let thetitle = title.current.value;
        let thecontent = text.current.value;

        //

        setSended("yes");

    };

    return (
        <div className="conteiner">

            <div className="create-post">

                <input onChange={textChange} ref={title} placeholder="Give a title to your ideia" type="text"></input>

                <textarea rows={15} onChange={textChange} ref={text} placeholder="What you want to say?"></textarea>

                <Button />

            </div>

        </div>
    )
}
