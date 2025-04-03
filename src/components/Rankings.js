import './Rankings.css';

function Rankings() {
    return (
        <main>
            <h1>Rankings Page</h1>
            <div id="current-champions-list">
                <h2>P4P Ranking Top10</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Fighter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Islam Makhachev</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jon Jones</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Ilia Topuria</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Merab Dvalishvili</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dricus Du Plessis</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Magomed Ankalaev</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Belal Muhammad</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Alex Pereira</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Alexandre Pantoja</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Tom Aspinall</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Rankings;