import NPC from '../assets/npc1.jpg'
import sb from '../assets/sb.png'
export default function Projects() {
  return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <img src={sb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Spellbinder</h5>
            <p className="card-text">Track your Magic the Gathering collection!</p>
            <a href="https://spellbindertcg-a6e0edcf3480.herokuapp.com/" className="btn btn-primary">Spellbinder</a>
          </div>
        </div>

      </>
  );
}
