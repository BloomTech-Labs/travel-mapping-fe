import React from 'react';

import { Button, Modal } from 'semantic-ui-react';

import { useGetCollabAlbum } from '../../store/hooks/useImmediateFetch';
import { useRemoveCollab } from '../../store/hooks/useFetchOnRequest';
import { useLogOnChange } from '../../store/hooks/misc';

const CollaboratorsList = ({ album_id }) => {

  const [collaborators, , , refresh] = useGetCollabAlbum(album_id);
  useLogOnChange(`album ${album_id} collabs:`, collaborators);

  const [removeCollab] = useRemoveCollab(refresh);

  return (
    <div>
      collabList
      <ul>
        {collaborators.map(e => (
          <li key={e.collaborator_id}>
            <span>{e.display_name}</span>
            {/* <Button onClick={() => removeCollab(album_id, e.collaborator_id)}>
              Remove
            </Button> */}
            <Modal 
              trigger={<Button>Remove</Button>}
              header={`Remove ${e.display_name} as a Collaborator?`}
              content="Are you sure? You'll have to send them a new invitation if you want them back"
              actions={['Cancel', {key: 'remove', content: 'Remove', negative: true, value: 'remove'}]}
              onActionClick={(event) => { if (event.target.value === 'remove') removeCollab(album_id, e.collaborator_id) }}
            />
          </li>
        ))}
      </ul>
    </div>
  );

};

export default CollaboratorsList;