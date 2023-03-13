var messages = [
    'Before we get chatting, I want you to know I’ll never send you unsolicited dick pics. Duck pics, though, I can’t promise anything [send picture of a duck].',
    'I’m using my last 2% battery to send you this message. If that’s not commitment, I don’t know what is.',
    'I believe in following my dreams. Can I have your Instagram?',
    'Hey, my name`s Microsoft. Can I crash at your place tonight?',
    'I think you might be the missing semicolon in my code. Everything works perfectly when you`re around.',
    'You must have a great data structure, because you`ve been on my mind all day',
    'I`ve been trying to write an algorithm to describe how I feel about you, but I can`t seem to find the right variables. Can you help me out?',
    'Are you a software update? Because you`ve got my heart racing like a CPU.',
    'I must be a debugger, because I just can`t get you out of my code.',
    'Do you believe in love at first byte?',
    'I think you`ve got a pretty strong signal, because I`m picking up some serious chemistry here.',
    'Are you a keyboard? Because you`re just my type.',
    'I`m no hacker, but I think I`ve just successfully decrypted your heart',
]
function newMessage() {
    var randomNumber = Math.floor (Math.random() * (messages.length));
    document.getElementById('messageDisplay').innerHTML = messages[randomNumber];
}



