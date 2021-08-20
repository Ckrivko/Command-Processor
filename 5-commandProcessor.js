function solution() {

    let textObj = {

        text: '',

        append(string) {
            this.text += string;

        },
        removeStart(n) {
            // this.text = this.text.slice(n);
            this.text = this.text.substring(n);
        },

        removeEnd(n) {

           // this.text = this.text.slice(0, -n)
           this.text = this.text.substring(0, this.text.length - n);
        },


        print() {
            console.log(this.text);

        }

    }

    return textObj;
}

//  let firstZeroTest = solution();
// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();


// let secondZeroTest = solution();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();
