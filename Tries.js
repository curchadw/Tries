class TrieNode{
 constructor(key){
     //the "key" value wil be the character in sequnece
    this.key = key

    //reference to parent
    this.parent = null

    //Hash/Object of children
    this.children = {}

    //check to see if the node is at the end
    this.end = false
 }

    getWord(){
        let output = []
        let node = this

        while(node !== null){
            output.unshift(node.key)
            node = node.parent
        }

        return output.join('')
    }
}

class Trie {
    constructor(){
    this.root = null
    }

    insert(word){
        let node = this.root //start at the root
        //loop through every character of the word
        for (let i = 0; i < word.length; i++){
            //looking to see if character node exists in children
            if(!node.children[word[i]]){
                //if it doesn't exist, we then create it
                node.children[word[i]].parent = new TrieNode(word[i])

                //also assign the parent to the child node
                node.children[word[i]].parent = node
            }

            //Otherwise proceed to the next depth
            node = node.children[word[i]]

            //check to see if this is the last word
            if (i == word.length-1){
                node.end = true
            }
        }
    }
    //finding word with a given prefix
    find(str=''){
        let node = this.root
        let output = []
        
        //for every char in the prefix
        

        for (let i = 0; i < str.length; i++){
            //make sure prefix actually has words
            if (node.children[str[i]]){
                node = node.children[str[i]]
            } else{
                //there's nothing to return
                return output
            }
        }
        //recursively find all words in the given node.
        find(node,output)

        return output;
    }
}

