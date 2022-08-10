import { Link } from "react-router-dom"
import "./Profile.css"
export const Profile = () => {
    return (
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="col-md-4">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABCFBMVEVjhZbbsYBxDMcAAADw8PCmbiz9MjIyjf1yAMrx8/XbsH3gv5xjhpViiJThtoRzXUNqV7C9mG5iipJnAMxkf5riuXrv+flwHcRoZqj59u9LZXL8SEhIlfxmc6EmMzkrBUxuNb1sR7bRqXqesLm6h5zCklyRXdCmhmE/KhE0Rk+jwvfx5ub+Dw/ZrHWJtPhAVmETGRyOc1OfaSpVc4HZz+hJCIHm0r1hCqtbW1spIRh8MMqlf9ardKZTQzFsRx1+VCFrVLG+jZhpYqpnbqRkgZllep1tQ7iLVNTkxZg+JABsTbRtPbthjpDQo4pvL791eKx4JsmkftaaZJ7Bma5XO1QABxUwGwBeTTt+GzXbAAAEmUlEQVR4nO3deXPSQBjHcZpqizRBjlLaKgq1Wu+e3kfpAT1EbD3f/zvR0TxPMtklJttsNgm/7587DM3HhNklCbFUQgghhBBCCCGEEEIIIYTQFOc0KB7iEcfgdiWWc952+0TExlsaqhWB2OiVrb+Vuyxs01BxhRaEeQrC/AdhTnIoWxjyC92hkSdsOMHskD9jLuew5rZMG+j0aWjscqwLGqmx8FMtWH+QSWJjXHYb8pFII2WLE4fKYp1sCrt0JPY8oaUUhIaCEEIIU88O5hfSkLLQcd/BIPB4MVipS9s3LNGQqvCI3v7YGNDpi9O0t4GSiT4mUVg8pC+sKW99LGkPQgghhBDCPAv7V57zoglHwvWOlLIHHbcjrcR2122cPtHNOdZ7uPKhYuxwtRdT+UBaEEIIIYQFEtrCJQbNswULR+lc07CXhQ5TEh7RH9R7TaMhuciQCtA39S9rvRjHF/3MNQ1CvUdpFoTF34cQ5l+Iz+HVhJLL8JFqqpa2kG8KHcU7E9U8aKl1IBB1C6mY59qa65UZlSrrUylM56Ii9iGEEIYJ8TlUyW4IRRPyxK0uDE79WoT2YNgLNg6DMfBg3e2zovAzvQFP/XqEHcVzF81WhVIC/iFSLU+o4XP4RxgJJBEqwsRauvchhBAmKcTnEEK5MMpsIb7IN1tctVZT5zlvezDuBrsQgScPgp2cLiTVKb/7Fx3r0kirtvLeitCN5OL3vKcBKEmy8i7vXUslCCGEEEIIMyoU50PJWX3ffChuljhVrkhevRSSVqHdsdpCQaBlvXW7eCcQV57fntj8Y3rVk7lbE5tb0iuMtvKmleOlRDg/OU/4dG5iTzMhJKhsH0IIIYQQQhjr5EXzkr/55kY46Acf9eDrBfX1vdu3l9SNnAi9+2ZHorA9S9WF807PciPkJHcM+YTCKUAIIYQQQgh98ZMhCivkJ0MoCzP/HX/yqi2SMPvnaUJW3tGECQYhhBBCCGFmhZNvxvAJq5QnTD491/GPO0LnTHxFff/gtk3ESmK3YiwsvKZ2dQgljy6TXHu6SzvzJu/ExG6nqVT5UFnVIhSSXT+UCJMLQgghhLBAQjr7HXG2iLj1QuaE3lMjhskJ6xtCa8aEYb+SVRVWt2eFxCVuasKQXzpDCCGEEEIIoSsMeYpSMYQl8YcX/Mxu5TWNuGgzuGoT857XVpCVN4QQQgghhEnKkpsPsym0l+lBEsOCCp1aYqu27AqTWnlDCCGEEE6zMHjuu2BC+5AfJKEqrIdk7rqFl3PVVZu3yZIMnqcRUl55V99ACCGEEEI4TUKqoPOh92uTxTuxhDNrIYX9g6Qv5DsyYwrjZVLIUgghhBBCCDMq5Ev7ORTeD4kfHV3fpjYpPb+30CCsXg+JFjXVDd51xlxeEEIIofkghNDfszwL+Xt86D6kNn5s/Ss/wjrvlJ0Q4U960SPTKn9JCh9CaCQIIYTQfBAGhSHA62eFED6k9sm189MdOVvdpUyr/MUVch9ZyEOZgnEQQgih+SCEsHjCR9SvfYqHiiEs0f8utkkjP4xu//+LLaRYuGVw66MEIYQQmg9CCNMT/gZZAd9gHVHwEgAAAABJRU5ErkJggg==" alt="profile-picture" />
                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>jam jam</h5>
                            <h6>web developer</h6>
                            <p className="profile-rating mt-3 mb-5"> RANKINGS: <span> 1/10 </span></p>
                        
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" id="profile-tab" data-toggle="tab" to="#profile" role="tab">Timeline</Link>
                                </li>
                            </ul>
                        
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}