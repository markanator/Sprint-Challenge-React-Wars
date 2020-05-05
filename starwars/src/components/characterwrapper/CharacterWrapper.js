import React, {useEffect, useState} from 'react';
import Character from '../charactercard/Character';
import axios from 'axios';
import Paginationy from '../pagination/Paginationy';

import './CharacterWrapper.css';

export default function CharacterWrapper() {
    const [charArray,
        setCharArray] = useState([]);
    const [loading,
        setLoading] = useState(false);
    const [currentPage,
        setCurrentPage] = useState(1);
    const [charPerPage] = useState(4);
    // const [pageInfo, setPageInfo] = useState([]);

    const queryUrl = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        const fetchChar = async() => {
            setLoading(true);
            const res = await axios.get(queryUrl);
            setCharArray(res.data.results);
            setLoading(false);
        }
        fetchChar();
    }, []);

    const indexofLastchar = currentPage * charPerPage;

    const indexOfFirstChar = indexofLastchar - charPerPage;

    const currentChar = charArray.slice(indexOfFirstChar, indexofLastchar);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="char-container-wrapper">

                {currentChar.map((char) => {

                    return (<Character
                        key={char.id}
                        loading={loading}
                        name={char.name}
                        status={char.status}
                        url={char.image}
                        originL={char.origin.name}/>);
                })}
            </div>

            <div className="NAV">
                <Paginationy
                    CharPerPage={charPerPage}
                    totalChars={charArray.length}
                    paginate={paginate}/>

            </div>
        </div>
    );
}