export function SobreNosotros(){
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>About Us</h1>
            </div>
            <p>Este es una app para crear listas con React</p>
            <h3>Aquí podrás: </h3>
            <ul>
                <li>Agregar tareas</li>
                <li>Desmarcar tareas</li>
                <li>Marcar tareas como realizadas</li>
                <li>Eliminar tareas</li>
                <li>Editar tareas</li>
            </ul>
            <h3>Para realizar este trabajo se usó: </h3>
            <ul>
                <li>React</li>
                <li>React Router</li>
                <li>React Hooks como: </li>
                <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useForm</li>
                </ul>
                <li>Material UI para tarjetas y botones</li>
            </ul>
        </div>
    );
};