import React from 'react';
import './Options.scss';

interface Props {
    title: string;
}

const Options: React.FC<Props> = ({title}: Props) => {

    console.log(chrome.storage)
    chrome.storage.sync.get((item) => {
        console.log(item)
    })

    function handleSet() {
        let data = {
            aa: 11, bb: 22,
            now: new Date().toLocaleString()
        }
        console.log('设置', data)
        chrome.storage.sync.set(data)
        chrome.storage.local.set({
            aa: 'local'
        })
        localStorage.setItem('localStorage', 'localStorage')
    }

    function handleSetSingle() {
        let data = {
            aa: '设置单个字段'
        }
        console.log('设置', data)
        chrome.storage.sync.set(data)
    }

    function handleGet() {
        chrome.storage.sync.get((item) => {
            console.log(item)
        })
        chrome.storage.local.get((item) => {
            console.log(item)
        })
    }

    function getCurrentTab() {

        chrome.tabs.getCurrent().then((tab) => {
            console.log('当前 tab', tab)
        })

        // chrome.tabs.query可以通过回调函数获得当前活跃tab
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            console.log('当前活跃tab', tabs)
        });
    }


    return <div className='OptionsContainer'>

        {title} Page
        <br/>

        <h2>存储</h2>
        <button onClick={handleSet}>sync set</button>
        <button onClick={handleSetSingle}>设置单个字段</button>
        <button onClick={handleGet}>sync get</button>
        <hr/>
        <button onClick={getCurrentTab}>获取 当前 tab</button>
        <hr/>

    </div>;
};

export default Options;
