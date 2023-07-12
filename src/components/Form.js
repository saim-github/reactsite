function Form() {
    return (
        <form action="#" method="get">
            <div>
                <label htmlFor="fname">First Name:
                    <input type="text" name="fname" id="fname" placeholder="Enter your first name" />
                </label>
            </div>
            <div>
                <label htmlFor="lname">Last Name:
                    <input type="text" name="lname" id="lname" placeholder="Enter your last name" />
                </label>
            </div>
            <div>
                <label htmlFor="age">Age:
                    <input type="number" name="age" id="age" placeholder="Enter your age in number" />
                </label>
            </div>
            <div>
                <label htmlFor="gen">Select Your Gender:
                    <input type="radio" name="gen" id="genM" value="Male" />Male
                    <input type="radio" name="gen" id="genF" value="Female" />Female
                    <input type="radio" name="gen" id="genO" value="Other" />Other
                </label>
            </div>
            <div>
                <input type="submit" value="submit" />
            </div>
        </form>
    );
}

export default Form; 