
function legionchallengejs(){
    let lastman = (`<h4>Meddig bírod a darálóban?</h4>
                    <p>Mission: lvl 10 Automaton</p>
                    <p>Primary weapon: AR-23 Liberator/Constitution R-2124</p>
                    <p>Secondary weapon: Peacemaker/Senator Revolver</p>
                    <p>Support weapon: MG-43</p>
                    <p>Booster: Hellpod space optimization</p>
                    <p>Stratagem: Orbital precision strike</p>
                    <p>Grenade: G-12 High Explosive</p>
                    <p>Armor: B-01/DP-00</p>
                    <p>Cape: Foe Smasher</p>
                    `)
    let freeflame = (`<h4>Szereted a BBQ-t?</h4>
                    <p>Mission: lvl 10 Terminid</p>
                    <p>Primary weapon: Flam-66 Torcher</p>
                    <p>Secondary weapon: P-72 Crisper</p>
                    <p>Support weapon: Flamethrower</p>
                    <p>Booster: Any</p>
                    <p>Stratagem: Any fire stratagem</p>
                    <p>Grenade: Any fire grenades</p>
                    <p>Armor: Any fire protection armor</p>
                    <p>Cape: Any</p>
                    `)
    let gas = (`<h4>Tartsd vissza a levegőt!</h4>
                    <p>Mission: lvl 10 Terminid</p>
                    <p>Primary weapon: Flam-66 Torcher</p>
                    <p>Secondary weapon: P-72 Crisper</p>
                    <p>Support weapon: Sterilizer</p>
                    <p>Guard Dog: Dog breath</p>
                    <p>Booster: Any</p>
                    <p>Stratagem: Any gas startagem</p>
                    <p>Grenade: Any gas grenade</p>
                    <p>Armor: Any gas/effect protection</p>
                    <p>Cape: Any</p>`)
    let laser = (`<h4>Kezdődhet a lézershow?</h4>
                    <p>Mission: lvl 10 Automaton/Terminid</p>
                    <p>Primary weapon: Any laser weapon(not plasma)</p>
                    <p>Secondary weapon: Las-58 Talon/Las-7 Dagger</p>
                    <p>Support weapon: Laser cannon/Cuasar cannon</p>
                    <p>Guard Dog: AX/Las-5 Guard dog rover</p>
                    <p>Booster: Any</p>
                    <p>Stratagem: Orbital laser</p>
                    <p>Grenade: Any</p>
                    <p>Armor: Any fire protection armor</p>
                    <p>Cape: Any</p>`)
    let melee = (`<h4>Odin vezessen át a Valkűrök kapuján</h4>
                    <p>Mission: lvl 10 Automaton/Terminid</p>
                    <p>Primary weapon: Nothing</p>
                    <p>Secondary weapon: All melee weapon</p>
                    <p>Support weapon: Nothing</p>
                    <p>Booster: Any</p>
                    <p>Stratagem: Backpack: Ballistic shield</p>
                    <p>Grenade: G-123 Thermite</p>
                    <p>Armor: Any heavy armor</p>
                    <p>Cape: Any</p>`)
    let legionchallengevalue = document.getElementById('legionchallenge').value
    let puthere = document.getElementById('legionchallengeputhere')
    if(legionchallengevalue == "lastman")
        puthere.innerHTML = lastman
    else if(legionchallengevalue == "freeflame")
        puthere.innerHTML = freeflame
    else if(legionchallengevalue == "gas")
        puthere.innerHTML = gas
    else if(legionchallengevalue == "laser")
        puthere.innerHTML = laser
    else if (legionchallengevalue == "melee")
        puthere.innerHTML = melee
}


window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play()
});


