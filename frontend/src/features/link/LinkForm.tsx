import {ChangeEvent, FC, FormEvent, useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {useAppSelector} from "../../app/hooks";
import {selectLinkCreating} from "./linkSlicer";
import {ILink} from "../../types";

interface Props {
  onSubmit: (link: ILink) => void
}

const LinkForm: FC<Props> = ({onSubmit}) => {
  const creating = useAppSelector(selectLinkCreating);
  const [state, setState] = useState<ILink>({url: ''});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setState(prev => ({...prev, [name]: value}))
  }
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(state);
    setState({url: ''})
  }

  return (
    <form autoComplete='off' onSubmit={onFormSubmit}>
      <Grid container direction="column" spacing={2} alignItems='center'>
        <Grid item>
          <TextField type='url' id='url' name='url' label='Link' required onChange={onChange} value={state.url}/>
        </Grid>
        <Grid item xs>
          <Button type='submit' variant='contained' color="primary" disabled={creating === 'pending'}>Shorten!</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LinkForm;