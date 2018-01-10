
import * as React from 'react';

import { Layer, Emerge } from '../../../recoil/src/index';

import { observer } from 'mobx-react';

import { appStore } from '../../stores/_GlobalStore';

import {IHomeProps} from '../../interfaces/views/IHomeProps';

@observer
export default class Home extends React.Component<IHomeProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layer fill flex>
                <Layer fill flexCenter>
                    <Emerge if={!appStore.menu}>
                        <i className="material-icons super-xl mb20">home</i>
                        <h2 className="mb20">Welcome home.</h2>
                        <h1 className="mb20">
                            This is a simple boilerplate.
                        </h1>
                    </Emerge>
                </Layer>
            </Layer>
        )
    }
} 