import React from 'react'

export default function Tabbar (props) {
    const handleClick = (index) =>{
      props.myEvent(index)
    }
    return <div>
      <ul>
        {props.list.map((item, index) => 
          <li key={item.id}
            onClick={() => handleClick(index)}
            className={index === props.current ? 'actives': ''}>
              {item.text}
          </li>
        )}
      </ul>
    </div>
    
  
  
}

// export default class Tabbar extends Component {
//   render () {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item, index) => 
//             <li key={item.id}
//               onClick={() => this.handleClick(index)}
//               className={index === this.props.current ? 'actives': ''}>
//                 {item.text}
//             </li>
//           )}
//         </ul>
//       </div>
//     )
//   }
//   handleClick (index) {
//     this.props.myEvent(index)
//   }
// }