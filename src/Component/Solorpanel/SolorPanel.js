import React from 'react'
import './Solorpanel.css'
import SolorPanelCard from '../SolorpanelCard/SolorPanelCard'
export default function SolorPanel() {
    return (
        <div className='container'>
            <div className='py-5'>
                <h3>Solor Panel</h3>
                <hr />
                <div className='d-flex py-5'>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="Monocrystalline-tab" data-bs-toggle="tab" data-bs-target="#Monocrystalline" type="button" role="tab" aria-controls="home" aria-selected="true">Monocrystalline</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#Polycrystalline" type="button" role="tab" aria-controls="Polycrystalline" aria-selected="false">Polycrystalline</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Bifacial-tab" data-bs-toggle="tab" data-bs-target="#Bifacial" type="button" role="tab" aria-controls="Bifacial" aria-selected="false">Bifacial</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="Thin-tab" data-bs-toggle="tab" data-bs-target="#Thin" type="button" role="tab" aria-controls="Thin" aria-selected="false">Thin Film</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="PERC-tab" data-bs-toggle="tab" data-bs-target="#PERC" type="button" role="tab" aria-controls="PERC" aria-selected="false">PERC</button>
                    </li>
                </ul>
                <div className="tab-content ps-5" id="myTabContent">
                    <div className="tab-pane fade show active" id="Monocrystalline" role="tabpanel" aria-labelledby="Monocrystalline-tab">
                        <h4>Monocrystalline</h4>
                        <SolorPanelCard />
                    </div>
                    <div className="tab-pane fade" id="Polycrystalline" role="tabpanel" aria-labelledby="Polycrystalline-tab">
                        <h4>Polycrystalline</h4>
                        <SolorPanelCard />
                        </div>
                    <div className="tab-pane fade" id="Bifacial" role="tabpanel" aria-labelledby="Bifacial-tab">
                        <h4>Bifacial</h4>
                        <SolorPanelCard />
                        </div>
                    <div className="tab-pane fade" id="Thin" role="tabpanel" aria-labelledby="Thin-tab">
                        <h4>Thin Film</h4>
                        <SolorPanelCard />
                        </div>
                    <div className="tab-pane fade" id="PERC" role="tabpanel" aria-labelledby="PERC-tab">
                        <h4>PERC</h4>
                        <SolorPanelCard />
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
