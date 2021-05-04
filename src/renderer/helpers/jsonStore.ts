import * as fs from 'fs';

const testJSON = {
    "fileCount": 102, "musicFileCount": 92, "time": 0.11743999999816879, "files": [{
        "root": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I",
        "files": [{
            "name": "01 Forever & Ever.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/01 Forever & Ever.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "02 All Over the World.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/02 All Over the World.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "03 Week-End.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/03 Week-End.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "04 Lucifer.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/04 Lucifer.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "05 Mr. Fisher.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/05 Mr. Fisher.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "06 A Night With Captain Midnight.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/06 A Night With Captain Midnight.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "07 Travelling.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/07 Travelling.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "08 Final Parade.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/08 Final Parade.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "09 Back to Nowhere.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/09 Back to Nowhere.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "10 Nightwalker.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/10 Nightwalker.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "11 Broken Mirror.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/11 Broken Mirror.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "12 Faithful Andy.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/12 Faithful Andy.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "13 The Bartender.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/13 The Bartender.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "14 Piccadilly.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/14 Piccadilly.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "15 Morning Mist.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/15 Morning Mist.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. I/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }, {
        "root": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II",
        "files": [{
            "name": "01 Boogie Belgique - Smile.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/01 Boogie Belgique - Smile.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "02 Boogie Belgique - Hello Sinner.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/02 Boogie Belgique - Hello Sinner.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "03 Boogie Belgique - Red Steam.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/03 Boogie Belgique - Red Steam.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "04 Boogie Belgique - March of Time.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/04 Boogie Belgique - March of Time.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "05 Boogie Belgique - Like It Hot.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/05 Boogie Belgique - Like It Hot.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "06 Boogie Belgique - Gabriel.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/06 Boogie Belgique - Gabriel.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "07 Boogie Belgique - A Little While.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/07 Boogie Belgique - A Little While.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "08 Boogie Belgique - Through the Night.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/08 Boogie Belgique - Through the Night.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "09 Boogie Belgique - Remember.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/09 Boogie Belgique - Remember.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "10 Boogie Belgique - A Record Falls.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/10 Boogie Belgique - A Record Falls.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "11 Boogie Belgique - Monstro.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/11 Boogie Belgique - Monstro.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "12 Boogie Belgique - Philotimo.flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/12 Boogie Belgique - Philotimo.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "13 Boogie Belgique - Lucifer (Proleter remix).flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/13 Boogie Belgique - Lucifer (Proleter remix).flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "14 Boogie Belgique - Broken Mirror (Mononome remix).flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/14 Boogie Belgique - Broken Mirror (Mononome remix).flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "15 Boogie Belgique - Piccadilly (S Strong remix).flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/15 Boogie Belgique - Piccadilly (S Strong remix).flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "16 Redwood - A Place to Hide (Boogie Belgique remix).flac",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/16 Redwood - A Place to Hide (Boogie Belgique remix).flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Boogie Belgique - Nightwalker Vol. II/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }, {
        "root": "/home/taco/Music/Caravan Palace - Robot Face",
        "files": [{
            "name": "01 Caravan Palace - Lone Digger.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/01 Caravan Palace - Lone Digger.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "02 Caravan Palace - Comics.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/02 Caravan Palace - Comics.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "03 Caravan Palace feat. JFTH - Mighty.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/03 Caravan Palace feat. JFTH - Mighty.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "04 Caravan Palace - Aftermath.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/04 Caravan Palace - Aftermath.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "05 Caravan Palace - Wonderland.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/05 Caravan Palace - Wonderland.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "06 Caravan Palace - Tattoos.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/06 Caravan Palace - Tattoos.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "07 Caravan Palace - Midnight.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/07 Caravan Palace - Midnight.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "08 Caravan Palace - Russian.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/08 Caravan Palace - Russian.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "09 Caravan Palace - Wonda.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/09 Caravan Palace - Wonda.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "10 Caravan Palace - Human Leather Shoes for Crocodile Dandies.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/10 Caravan Palace - Human Leather Shoes for Crocodile Dandies.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "11 Caravan Palace - Lay Down.flac",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/11 Caravan Palace - Lay Down.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }, {
            "name": "folder.jpg",
            "fullName": "/home/taco/Music/Caravan Palace - Robot Face/folder.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }, {
        "root": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano",
        "files": [{
            "name": "Fabrizio Paterlini - The Art of the Piano - 01 Somehow familiar.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 01 Somehow familiar.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 02 Midsummer tiny song.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 02 Midsummer tiny song.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 03 My piano, the clouds.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 03 My piano, the clouds.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 04 Empty room.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 04 Empty room.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 05 Conversation with myself.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 05 Conversation with myself.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 06 Broken.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 06 Broken.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 07 If melancholy were music.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 07 If melancholy were music.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "Fabrizio Paterlini - The Art of the Piano - 08 Wind song.flac",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/Fabrizio Paterlini - The Art of the Piano - 08 Wind song.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Fabrizio Paterlini - The Art of the Piano/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }, {
        "root": "/home/taco/Music/Kaleo - A-B",
        "files": [{
            "name": "01 No Good.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/01 No Good.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "02 Way Down We Go.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/02 Way Down We Go.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "03 Broken Bones.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/03 Broken Bones.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "04 Glass House.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/04 Glass House.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "05 Hot Blood.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/05 Hot Blood.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "06 All the Pretty Girls.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/06 All the Pretty Girls.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "07 Automobile.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/07 Automobile.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "08 Vor Vaglaskgi.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/08 Vor Vaglaskgi.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "09 Save Yourself.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/09 Save Yourself.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "10 I Can't Go On Without You.flac",
            "fullName": "/home/taco/Music/Kaleo - A-B/10 I Can't Go On Without You.flac",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover (1).jpg",
            "fullName": "/home/taco/Music/Kaleo - A-B/cover (1).jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Kaleo - A-B/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }, {
        "root": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack",
        "files": [{
            "name": "01 Gareth Coker feat. Aeralie Brighton - Ori, Lost in the Storm.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/01 Gareth Coker feat. Aeralie Brighton - Ori, Lost in the Storm.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "02 Gareth Coker feat. Rachel Mellis - Naru, Embracing the Light.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/02 Gareth Coker feat. Rachel Mellis - Naru, Embracing the Light.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "03 Gareth Coker - Calling Out.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/03 Gareth Coker - Calling Out.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "04 Gareth Coker - The Blinded Forest.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/04 Gareth Coker - The Blinded Forest.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "05 Gareth Coker - Inspiriting.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/05 Gareth Coker - Inspiriting.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "06 Gareth Coker - First Steps Into Sunken Glades.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/06 Gareth Coker - First Steps Into Sunken Glades.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "07 Gareth Coker - Finding Sein.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/07 Gareth Coker - Finding Sein.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "08 Gareth Coker feat. Tom Boyd - Up the Spirit Caverns Walls.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/08 Gareth Coker feat. Tom Boyd - Up the Spirit Caverns Walls.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "09 Gareth Coker feat. Aeralie Brighton - The Spirit Tree.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/09 Gareth Coker feat. Aeralie Brighton - The Spirit Tree.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "10 Gareth Coker - Kuro's Tale I - Her Rage.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/10 Gareth Coker - Kuro's Tale I - Her Rage.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "11 Gareth Coker feat. Tom Boyd - Thornfelt Swamp.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/11 Gareth Coker feat. Tom Boyd - Thornfelt Swamp.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "12 Gareth Coker - Down the Moon Grotto.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/12 Gareth Coker - Down the Moon Grotto.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "13 Gareth Coker - The Ancestral Trees.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/13 Gareth Coker - The Ancestral Trees.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "14 Gareth Coker - Gumo's Hideout.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/14 Gareth Coker - Gumo's Hideout.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "15 Gareth Coker - Breaking Through the Trap.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/15 Gareth Coker - Breaking Through the Trap.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "16 Gareth Coker - Climbing the Ginso Tree.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/16 Gareth Coker - Climbing the Ginso Tree.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "17 Gareth Coker - Restoring the Light, Facing the Dark.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/17 Gareth Coker - Restoring the Light, Facing the Dark.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "18 Gareth Coker feat. Tom Boyd - The Waters Cleansed.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/18 Gareth Coker feat. Tom Boyd - The Waters Cleansed.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "19 Gareth Coker - Lost in the Misty Woods.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/19 Gareth Coker - Lost in the Misty Woods.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "20 Gareth Coker - Home of the Gumon.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/20 Gareth Coker - Home of the Gumon.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "21 Gareth Coker - Escaping the Ruins.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/21 Gareth Coker - Escaping the Ruins.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "22 Gareth Coker - Kuro's Tale II - Her Pain.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/22 Gareth Coker - Kuro's Tale II - Her Pain.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "23 Gareth Coker feat. Rachel Mellis - Riding the Wind.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/23 Gareth Coker feat. Rachel Mellis - Riding the Wind.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "24 Gareth Coker feat. Rachel Mellis - Completing the Circle.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/24 Gareth Coker feat. Rachel Mellis - Completing the Circle.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "25 Gareth Coker feat. Aeralie Brighton - Approaching the End.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/25 Gareth Coker feat. Aeralie Brighton - Approaching the End.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "26 Gareth Coker - Mount Horu.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/26 Gareth Coker - Mount Horu.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "27 Gareth Coker - Conundrum.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/27 Gareth Coker - Conundrum.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "28 Gareth Coker - The Crumbling Path.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/28 Gareth Coker - The Crumbling Path.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "29 Gareth Coker - Racing the Lava.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/29 Gareth Coker - Racing the Lava.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "30 Gareth Coker - Fleeing Kuro.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/30 Gareth Coker - Fleeing Kuro.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "31 Gareth Coker feat. Aeralie Brighton - The Sacrifice.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/31 Gareth Coker feat. Aeralie Brighton - The Sacrifice.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "32 Gareth Coker feat. Aeralie Brighton - Light of Nibel.mp3",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/32 Gareth Coker feat. Aeralie Brighton - Light of Nibel.mp3",
            "isMusicFile": true,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover (1).jpg",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/cover (1).jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover (2).jpg",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/cover (2).jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }, {
            "name": "cover.jpg",
            "fullName": "/home/taco/Music/Ori and the Blind Forest Original Soundtrack/cover.jpg",
            "isMusicFile": false,
            "metadata": null,
            "newFile": false
        }]
    }]
};

const writeJson = (filePath) => {
    try {
        fs.writeFileSync('./file.json', JSON.stringify(testJSON));
    }catch (e){
        console.error(e.message);
    }
}

const loadJson = (filePath) => {
    try {
        return JSON.parse(fs.readFileSync('./file.json', 'utf-8'));
    } catch (e) {
        console.error(e.message);
    }
}
