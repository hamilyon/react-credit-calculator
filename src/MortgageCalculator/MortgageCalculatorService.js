function requestMortgage(state) {
    fetch("http://localhost:8080/mortgage", {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
      .then(res => res.json())
      .then(
        (result) => {
            if (result.currentPage == "contactUs") {
                this.setState({
                    isLoaded: true,
                    currentPage: "contactUs"
                  });
            }
            else {
                this.setState({
                    isLoaded: true,
                });
                this.setState(result)
            }
        }
        ,
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
}

export default requestMortgage;