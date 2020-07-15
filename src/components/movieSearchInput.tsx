import React from 'react';

interface MovieSearchInputProps {
    value?: string;
    defaultValue: string;
    onChange: (value: any)=> void;
}

export default function MovieSearchInput({value, defaultValue, onChange}: MovieSearchInputProps){
    return (
        <input className="form-control mr-sm-2"
               type="search"
               placeholder="Search"
               aria-label="Search"
               defaultValue={defaultValue}
               onChange={(e:any) => onChange(e.target.value)}
        />
    );
}