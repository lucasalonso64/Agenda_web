import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css';
class Feed extends Component {
    state = {
        feed: [],
    }
    async componentDidMount(){
        const response = await api.get('posts');

        this.setState({feed: response.data });


    }

    render() {
        return (
            <section id="post-list">
               {this.state.feed.map(post => (
                    <article>
                    <header>
                        <div className="user-info">
                            <span>Nome: {post.nome}</span>
                            <sapan className="place">E-mail: {post.email}</sapan>
                            <sapan className="telefone">Telefone: {post.telefone}</sapan>
                        </div>

                    </header>
                    <footer>

                    </footer>

                </article>
               ))}
            </section>
        );
    }

}
export default Feed;