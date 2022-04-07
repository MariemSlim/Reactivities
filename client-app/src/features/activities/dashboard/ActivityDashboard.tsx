import React from 'react';
import { Grid, GridColumn} from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity :Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEditActivity, deleteActivity}: Props){
    return (
      <Grid>
        <GridColumn width="10">
          <ActivityList 
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
            />
        </GridColumn>
        <GridColumn width='6'>
            {selectedActivity && !editMode &&
            <ActivityDetails 
              activity={selectedActivity} 
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />}
            {editMode && 
            <ActivityForm 
              activity={selectedActivity} 
              closeForm={closeForm}
              createOrEditActivity={createOrEditActivity}
            />}
        </GridColumn>
      </Grid>
    );
}