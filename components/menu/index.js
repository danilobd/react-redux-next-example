import React from 'react'
import Link from "next/link";

export default function Menu() {
    return (
        <div className="menu-top">

            <Link href="/">
                <a>Posts</a>
            </Link>

            <Link href="create-post">
                <a>Create Post</a>
            </Link>

        </div>
    )
}
