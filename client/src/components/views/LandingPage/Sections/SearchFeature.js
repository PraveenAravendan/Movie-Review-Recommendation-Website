import React, { useState } from 'react'
import { Input } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

const { Search } = Input;

function SearchFeature(props) {
    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = ( event) => {
            setSearchTerms(event.currentTarget.value)

            props.refreshFunction(event.currentTarget.value)
        }
    return (
        <div>
            <Search
                    value={SearchTerms}
                    onChange={onChangeSearch}
                    placeholder="Search by typing ..."
            />
        </div>
    )
}

export default SearchFeature