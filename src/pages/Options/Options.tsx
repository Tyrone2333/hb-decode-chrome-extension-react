import React from 'react';
import './Options.css';
import Decode from '../../components/Decode'

interface Props {
    title: string;
}

const Options: React.FC<Props> = ({title}: Props) => {
    return <Decode></Decode>;
};

export default Options;
