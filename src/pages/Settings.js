
import "../style/Settings.css"
import { React, useState, useEffect, useContext } from 'react';

import {colors} from "../colors"

import NFTs from '../components/NFTs';
import { fetchNFTs } from '../utils/fetchNFTs';
import defaultPfp from "../img/defaultpfp.png"
import { useStateValue } from '../StateProvider';
import {Avatar} from "@mui/material";
import { ThemesContext } from "../ThemesProvider";
import ThemesRow from "../components/ThemesRow";

const Settings = () => {

  const {theme}=useContext(ThemesContext);

    const [photo, setPhoto] = useState(defaultPfp);
    const stateValue = useStateValue();
    const user = stateValue?.[0]?.user;

    const [searched, setSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState("");
    const walletInput = /^0x[a-fA-F0-9]{40}$/;

    const [owner, setOwner] = useState("");
    const [contractAddress, setContractAddress] = useState("");
    const[nfts, setNFTs] = useState("");

    const handleSubmit = () =>{
      if(!walletInput.test(owner.trim())){
        setInputError("Invalid wallet address. Example: 0xd8...");
        return;
      }
      setInputError("");
      
      setSearched(true);
      setLoading(true);
      fetchNFTs(owner, contractAddress, setNFTs).finally(()=>setLoading(false));
    }

    useEffect(()=>{
      if(user?.photoUrl){
        setPhoto(user.photoUrl);
      }
    }, [user]);

    return (
    <div className={`settings-container ${theme}`}>

      <header className="settings_header">
        <div className="settings_logo"><h2>Settings</h2></div>
        <div className="search-bar">
          <input class="inputField" type="text" placeholder="Search settings" />
        </div>
      </header>

      <div className="main-layout">

        <nav className="settings_sidebar">
          <ul>
            <li className="settings_active">You and Google</li>
            <li>Autofill</li>
            <li>Privacy and security</li>
            <li>Appearance</li>
            <li>Search engine</li>
          </ul>
        </nav>

      <main className="content">
        <section className="settings-group">
          <h3>General settings</h3>
            <div className="card">
              <ThemesRow/>
            <div className="setting-row">
              <div className="settings_text">

                <div className="nft-option">
                  <div className="nft-info">
                    <h4>Set an NFT Avatar</h4>
                    <h5>Enter your wallet address</h5>
                  </div>
                  <div className="nft-img"><img src="https://cdn.prod.website-files.com/64b702e0e92a993f08b979ce/66e00f11863261a4bac99c94_65d4822425e75b9af45e3aa9_Base_Wordmark_Blue.png"/></div>
                  <div className="addressHandler">
                    <input className="inputField" value={owner} onChange={(e) => setOwner(e.target.value)} type="text" pattern={walletInput} placeholder="Your wallet address here"/>
                    <button className="btn" onClick={handleSubmit} type="submit">Submit</button>
                  </div>
                </div>

                <div className="all-avatars">
                    <span className="avatar">
                      <Avatar
                        src={photo}
                        imgProps={{ referrerPolicy: "no-referrer" }}
                        onError={() => setPhoto(defaultPfp)}
                      />
                    </span>
                    <div className="avatar_options">
                      {loading? null : nfts.length > 0 ? (
                          nfts.map((nft) => (
                            nft?.media?.[0]?.gateway? (
                              <NFTs
                                image={nft.media[0].gateway}
                                id={nft.id.tokenId}
                            />
                            ) : null
                          ))
                        ) : ( 
                          searched && <h4 className="inputMsg">No NFTs found</h4>
                        )}
                      </div>
                </div>

                {inputError && <h4 className="inputMsg">{inputError}</h4>}

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);
}

export default Settings