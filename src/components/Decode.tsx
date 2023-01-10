import React, {Component, useState, useEffect, ChangeEvent, ChangeEventHandler} from 'react';
import './Decode.scss'

const Newtab = () => {
    const [inputField, setInputField] = useState('');
    const [outputField, setOutputField] = useState('');

    useEffect(() => {
        doConversion()
    }, [inputField]);

    // 加载页面立即读取剪切板
    useEffect(() => {
        // @ts-ignore
        // popup 中无法立即读取剪切板,增加这行还会导致页面打开变慢
        // document.querySelector('#input-text').focus()
        handleClipboardClick()
    }, []);

    // 浏览器有限制读取剪切板事件需要有按键触发
    function handleClipboardClick() {
        navigator.clipboard.readText()
            .then((text) => {
                setInputField(text)
            }).catch((error) => {
            console.log('readText 出错: ', error)
        })
    }

    function encode(text: string) {
        return encodeURIComponent(btoa(text))
    }

    function decode(text: string) {
        return atob(decodeURIComponent(text))
    }

    // 转换
    function doConversion() {
        let text = inputField

        let convertedText
        console.log('doConversion', text)
        try {
            convertedText = JSON.stringify(JSON.parse(decode(text)), null, 4)
        } catch (e: any) {
            console.log(e.message)
            setOutputField(e.message)
            return
        }
        // copyTextToClipboard(convertedText)
        setOutputField(convertedText)
    }

    // 还原
    function doReduction() {
        let text = outputField
        let convertedText
        try {
            convertedText = encode(text)
        } catch (e: any) {
            console.log(e)
            setInputField(e.message)
            return
        }
        // copyTextToClipboard(convertedText)
        setInputField(convertedText)

    }


    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-xl'>hb 请求参数转码</h2>
                </div>
                <div className='row my-5'>
                    <button className='btn btn-primary' onClick={handleClipboardClick}>获取剪切板</button>
                </div>

                <div className='row'>
                    <p>输入框</p>

                    <textarea id='input-text' value={inputField} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ) => setInputField(ev.target.value)}/>
                    <button className='btn btn-primary' onClick={doConversion}>转码</button>
                </div>

                <div className='row'>
                    <p>转换结果</p>

                    <textarea id='output-text' value={outputField} onChange={(
                        ev: React.ChangeEvent<HTMLTextAreaElement>,
                    ) => setOutputField(ev.target.value)}/>
                    <button className='btn btn-primary' onClick={doReduction}>还原</button>

                </div>

            </div>
        </div>
    );
}
export default Newtab;
