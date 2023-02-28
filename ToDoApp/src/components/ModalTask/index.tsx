import React from 'react';
import {Task} from '~/interfaces/task';
import {useTranslation} from 'react-i18next';
import * as S from './styles';

type Props = {
  task: Task;
  visible: boolean;
  close: () => void;
  onDelete: () => void;
};

export const ModalTask: React.FC<Props> = (props) => {
  const {visible, task, close, onDelete} = props;
  const {t: translate} = useTranslation();

  const descriptionLabel = task.description;

  const statusLabel = task.isDone
    ? translate('components.modalTask.statusDone')
    : translate('components.modalTask.statusPending');

  return (
    <S.ModalComponent visible={visible} onRequestClose={close}>
      <S.Background>
        <S.Container>
          <S.Content>
            <S.Title>{translate('components.modalTask.title')}</S.Title>

            <S.Status status={task.isDone ? 'done' : 'pending'}>
              <S.Label>{translate('components.modalTask.status')}:</S.Label>
              {'\b\b\b' + statusLabel}
            </S.Status>

            <S.Description>
              <S.Label>{translate('components.modalTask.description')}:</S.Label>
              {'\b\b' + descriptionLabel} Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum ut nisi mauris. Suspendisse porttitor venenatis
              metus, a varius leo aliquam ut. Suspendisse potenti. Sed venenatis arcu eget
              ex semper, et accumsan est malesuada. Etiam eu aliquam sapien, et varius
              orci. Nam ullamcorper vestibulum massa, nec consequat neque mollis in. Sed
              dignissim rutrum sem, eget aliquam sapien tempor non. Phasellus faucibus
              mauris ac sem eleifend, at commodo est fringilla. Vestibulum pulvinar diam
              vitae leo congue pretium. Pellentesque augue orci, consequat eu fermentum
              at, scelerisque non massa. Praesent ultricies est nulla, quis finibus libero
              ultrices eget. Pellentesque nec ligula iaculis, semper felis sed, luctus
              sapien. Cras sit amet egestas elit, sit amet placerat ante. In aliquam
              eleifend nunc in sagittis. Nam hendrerit molestie consectetur. Duis in erat
              sit amet lorem hendrerit faucibus. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Sed semper feugiat porttitor. Suspendisse eu nisi augue.
              Fusce tincidunt, tellus at tristique placerat, sem nisl vulputate tellus, ut
              pretium massa mauris a eros. Integer commodo mi eget diam maximus
              sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Aenean lobortis vestibulum dapibus. Nulla a
              sem ipsum. Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nulla a velit vulputate nunc feugiat scelerisque.
              Mauris convallis congue leo a rutrum. Nulla at bibendum turpis, eu placerat
              dui. Cras lectus leo, venenatis ut tortor id, auctor suscipit nibh. Aliquam
              vulputate elit vehicula, condimentum nibh sed, iaculis velit. Cras blandit
              vehicula feugiat. Praesent luctus tempor odio, a vulputate tortor congue
              vel. Quisque ac gravida nibh. Ut sollicitudin quis leo non suscipit.
              Phasellus in ligula sit amet sem eleifend mollis vitae quis arcu. In
              ultricies convallis ullamcorper. Phasellus sit amet sem erat. Nullam
              placerat volutpat ex, pellentesque auctor sem pharetra ut. Cras ut diam ut
              nibh laoreet posuere. Aliquam molestie posuere ipsum, eget consectetur
              mauris. Morbi at egestas augue, id vehicula nulla. Etiam accumsan ultrices
              orci. Fusce congue facilisis sem eu posuere. Aliquam condimentum mauris a
              condimentum venenatis. Vestibulum nunc neque, laoreet ac fermentum at,
              laoreet vel est. Donec dignissim, nibh non accumsan egestas, sem ex
              consequat augue, in porta nisl nisl vitae ipsum. Nullam euismod suscipit
              magna, nec faucibus tortor commodo in. Duis vel gravida ex. Praesent mi
              neque, luctus et libero at, finibus commodo eros. Nam luctus sem eu aliquet
              egestas. Aliquam auctor velit ac odio iaculis, ut placerat tortor facilisis.
              Etiam quis sagittis nunc. Maecenas id rutrum nibh, at finibus nisl. In
              viverra urna ut metus congue ornare. Quisque nisl urna, imperdiet a massa
              in, pharetra imperdiet eros. Nulla facilisi. Curabitur eget vehicula ligula.
              Duis porttitor nunc dolor, et egestas dui consequat et. Sed imperdiet libero
              ac porta pharetra. Vivamus iaculis bibendum ex nec aliquam. Cras sem urna,
              sodales id aliquet vestibulum, tempor vitae urna. Curabitur id egestas erat.
              Integer aliquam congue feugiat. Nulla tincidunt dolor ultrices egestas
              sodales. In laoreet elementum interdum.
            </S.Description>
          </S.Content>

          <S.Footer>
            <S.Button type="exclude" onPress={onDelete}>
              <S.ButtonTitle>{translate('components.modalTask.exclude')}</S.ButtonTitle>
            </S.Button>

            <S.Button>
              <S.ButtonTitle>
                {translate('components.modalTask.statusChange')}
              </S.ButtonTitle>
            </S.Button>

            <S.Button onPress={close}>
              <S.ButtonTitle>{translate('components.modalTask.back')}</S.ButtonTitle>
            </S.Button>
          </S.Footer>
        </S.Container>
      </S.Background>
    </S.ModalComponent>
  );
};
