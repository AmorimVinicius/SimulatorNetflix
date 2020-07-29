import React from 'react';

function ButtonLink(props) {
  // props => recebe os parametros enviados pela execucao do <ButtonLink>
  console.log(props);
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
